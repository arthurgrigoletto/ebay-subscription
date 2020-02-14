import Queue from 'bull';

import * as jobs from '../app/jobs';
import redisConfig from '../config/redis';

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, { redis: redisConfig }),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name, data, options) {
    const queue = this.queues.find(q => q.name === name);

    return queue.bull.add(data, options);
  },
  async update(name, jobId, data, options) {
    const queue = this.queues.find(q => q.name === name);

    const repeatableJobs = await queue.bull.getRepeatableJobs();
    const job = repeatableJobs.find(j => j.id === jobId);

    await queue.bull.removeRepeatableByKey(job.key);

    return queue.bull.add(data, options);
  },
  async remove(name, jobId) {
    const queue = this.queues.find(q => q.name === name);

    const repeatableJobs = await queue.bull.getRepeatableJobs();
    const job = repeatableJobs.find(j => j.id === jobId);

    await queue.bull.removeRepeatableByKey(job.key);
  },
  process() {
    return this.queues.forEach(async queue => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        // Consider use Sentry or something like that
        console.log('Job failed', queue.key, job.data);
        console.log(err);
      });
    });
  },
};
