export async function getItemsByPage(page: string) {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 10 },
        body: JSON.stringify({
            query: `        
            query Items {
              items(orderBy: order_DESC, first: 100, where: {page: ${page}}) {
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
