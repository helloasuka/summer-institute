//to create pages programmatically - posts

exports.createPages = async( {actions, graphql} ) => {
    const {createPage} = actions;
    const {data:{allMdx:{edges:posts}}} = await 
    graphql(`
    {
        allMdx{
         edges{
           node{
             frontmatter{
               slug
             }
           }
         }
       }
    }
    `)

    posts.forEach(({node})=>{
        const {slug} = node.frontmatter;

        //create a page for every item in the array
        createPage({path:slug, component:require.resolve('./src/templates/post-template.js'), context:{slug:slug}})

    })

}
