export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6293c2cd0bc6187c727da206',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5odbbji2',
                  apiId: '7027419c-43c1-475d-8977-0f6172b26088'
                },
                {
                  buildHookId: '6293c2ceb6a95f0463469f59',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jvr1un4y',
                  apiId: 'f98309d1-d0e4-43f0-ab3c-795f9987d0da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sadiki-o/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jvr1un4y.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
