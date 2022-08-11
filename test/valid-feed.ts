import WebStoriesFeed from "../dist/webstories"

const validFeed: WebStoriesFeed = {
  version: 'https://jsonfeed.org/version/1.1',
  title: 'Valid feed',
  home_page_url: 'https://example.com',
  feed_url: 'https://example.com/feed.json',
  items: [{
    id: 'a2',
    content_text: 'Text',
    authors: [
      {
        name: 'muan', 
        _web_story: {
          response_endpoints: {
            twitter: 'muanchiou'
          }
        }
      }, {name: 'robb'}],
    _web_story: {
      date_expired: '2099-01-01T00:00:00+08:00',
      type: 'image',
      mime_type: 'image/jpg',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      alt: 'Sky',
      preview: { color: 'purple' },
      reactions: {
        open_heart_urls: ['https://httpbin.org/post?id=x']
      }
    }
  },{
    id: 'a1',
    content_text: 'Text',
    authors: [{name: 'robb'}],
    _web_story: {
      type: 'image',
      mime_type: 'image/jpg',
      url: 'https://photos.muan.dev/cdn-cgi/imagedelivery/-wp_VgtWlgmh1JURQ8t1mg/9324c569-55a2-4f28-4c0e-dbf5ad04d000/public',
      alt: 'Sky'
    }
  }]
}

console.log(validFeed)
