const settings = {
  "name": "vsichkibiznesi-project-files",
  "state": {
    "frontity": {
      "url": "https://administration.vsichkitemi.com",
      "title": "Всички Бизнеси",
      "description": "Директория на бизнесите в България"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Sample Page",
              "/sample-page/"
            ],
            [
              "Biznes",
              "/biznes/test/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://administration.vsichkitemi.com/",
          postTypes: [
            {
              type: "biznesi", // type slug
              endpoint: "biznesi", // REST API endpoint
              archive: "/biznesi" // link where this custom posts are listed
            }
          ],
          taxonomies: [
            {
              taxonomy: "kategorii_biznesi", // taxonomy slug
              endpoint: "biznesi", // REST API endpoint
              postTypeEndpoint: "biznesi", // endpoint from which posts from this taxonomy are fetched
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
