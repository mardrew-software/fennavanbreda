export async function getItemByTitle(slug: string) {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 10 },
        body: JSON.stringify({
            query: `        
            query Items {
              items(orderBy: createdAt_DESC, where: {urlPath: "${slug}"}) {
                endDate
                id
                location
                startDate
                summary
                title
                urlPath
                page
                mainImage {
                  id
                  url
                  width
                  mimeType
                  height
                }
                details {
                  html
                  text
                }
              }
            }   
            `
        })
    });
    const json = await response.json();
    if (json && json.data) {
        return json.data.items[0];
    } else {
        return null;
    }
}
