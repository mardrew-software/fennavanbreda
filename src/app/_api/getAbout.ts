export async function getProjects() {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 10 },
        body: JSON.stringify({
            query: `        
            query Projects {
              projects {
                slug
                date
                id
                image {
                  id
                  url
                  height
                  width
                }
                title
                techstack
                description {
                  html
                  text
                }
                smallDescription
              }
            }
            `
        })
    });
    const json = await response.json();
    if (json && json.data) {
        return json.data.projects;
    } else {
        return null;
    }
}
