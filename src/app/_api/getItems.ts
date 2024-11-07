export async function getItems() {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 10 },
        body: JSON.stringify({
            query: `        
            query Items {
              items(orderBy: order_DESC, first: 100) {
                endDate
                id
                location
                startDate
                title
                urlPath
                page
                meta
                homepageImage {
                    url
                    width
                    size
                    height
                }
                rows {
                  columns
                  width
                  align
                  segments {
                    type
                    content {
                      ... on Image {
                        id
                        image {
                          url
                          width
                          size
                          height
                        }
                        alt
                      }
                      ... on Text {
                        id
                        text {
                          html
                          text
                        }
                      }
                    }
                  }
                }
              }
            }            
            `
        })
    });
    const json = await response.json();
    if (json && json.data) {
        return json.data.items;
    } else {
        return null;
    }
}
