import axios from 'axios';

import ebayConfig from '../../config/ebay';

class FindItemsByKeywords {
  async run(keywords) {
    const { data } = await axios.get(
      'https://svcs.sandbox.ebay.com/services/search/FindingService/v1',
      {
        params: {
          'SECURITY-APPNAME': ebayConfig.clientID,
          'RESPONSE-DATA-FORMAT': 'JSON',
          keywords,
          'OPERATION-NAME': 'findItemsByKeywords',
          'paginationInput.entriesPerPage': 3,
        },
      }
    );

    const { searchResult } = data.findItemsByKeywordsResponse.find(item =>
      item.ack.includes('Success')
    );

    const { item: items } = searchResult.find(result => result['@count'] >= 3);

    const products = items.map(item => ({
      id: item.itemId[0],
      title: item.title[0],
      url: item.viewItemURL[0],
      price: item.sellingStatus[0].currentPrice[0].__value__,
    }));

    return products;
  }
}

export default new FindItemsByKeywords();
