export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cde327afcb291757f5d7178',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k1ti7jn1',
                  apiId: '96fadeae-3d92-4d06-b6dc-097b50d7210a'
                },
                {
                  buildHookId: '5cde327b6f7f41b76627813e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qfpr7rfu',
                  apiId: '3d012d2b-014a-49b2-bd84-bad60ab0526e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webriq/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qfpr7rfu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
