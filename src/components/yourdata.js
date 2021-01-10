export default {
  //(Please Do Not Remove The comma(,) after every variable)

  //Change The Website Template
  name: "Matthew",

  //Contact Email
  contactEmail: "matthewdukepan@gmail.com",

  // Landing Page Name
  landingPageName: "Matthew Pan",

  // Landing Page Paragraph
  landingPagePara:
    "A computer science student from Canada. I aim to deepen my understanding in various areas of technology and product development.",

  // Landing Page Image (replace - root/public/assets/photo.jpg)
  landingPageImage: "assets/1.jpg",

  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Trendy Markt", //Project Title - Add Your Project Title Here
      short: "A modern online grocery store.",
      tech: "HTML, CSS, Bootstrap, JS, PHP, MySQL",
      git: "https://github.com/Fryingpannn/OnlineGroceryStore-TrendyMarkt",
      // Image Size Should be (300X300 px)
      imageSrc: "assets/trendy.png",
      //Project URL - Add Your Project Url Here
      url: "https://trendymarkt.herokuapp.com/index.php"
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Commands REST API",
      short: "API that provides command line code snippets.",
      tech: "ASP.NET Core MVC, C#, EF Core, SQL Server, Docker",
      git: "https://github.com/Fryingpannn/.NETCore_MVC_RESTAPI",
      imageSrc: "assets/commanderapi.png",
      url: "http://commanderapi.canadacentral.azurecontainer.io/index.html"
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Recipe Search API",
      short: "Find the recipes of tens of thousands of dishes.",
      git: "https://github.com/Fryingpannn/RecipeSearchAPI",
      tech: "React.js, Css, Bootstrap",
      imageSrc: "assets/recipeapi.png",
      url: "https://recipesearchapi.web.app/"
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Graphics Card Web Scraper",
      short: "Python script that scrapes GPU data online.",
      tech: "Python, BeautifulSoup",
      imageSrc: "assets/pythongpu.png",
      git: "https://github.com/Fryingpannn/GPU_Webscrape"
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Forest Fire Detection App",
      short: "Mobile app that sends alerts to prevent fires.",
      tech: "React Native",
      imageSrc: "assets/charmander.png",
      git: "https://github.com/Fryingpannn/Forest_Fire_Detection_App"
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Stocks DD Forecasting",
      short: "Analyze stocks' due diligences on r/wsb.",
      tech: "Python (pandas), Django, ReactJS, Reddit & IEXFinance APIs",
      imageSrc: "assets/stonks.jpg",
      git: "https://github.com/Fryingpannn/Stocks_DDAnalyzer"
    }
    // Paste more projects here from the template

    /*
                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 7,
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
  ],

  // Contact Section
  contactPara:
    "I would be happy to discuss my projects & aspirations further with you, simply shoot me an email or message me on LinkedIn! :)",
  social: [
    // Add Or Remove The Link Accordingly
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/matthewdukepan/"
    },
    {
      name: "Github",
      url: "https://github.com/Fryingpannn"
    },
  ],

  // About Page
  aboutTitle: "I make remarkable digital products",
  aboutPara:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};