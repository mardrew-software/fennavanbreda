export async function getAbout() {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 10 },
        body: JSON.stringify({
            query: `        
            query Abouts {
              abouts {
                id
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
        return json.data.abouts[0];
    } else {
        return null;
    }
}
