(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(49)},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),c=a.n(r),i=(a(33),a(34),a(1)),s=a(14),l=a(27),m=a(8),u=a.n(m),d=a(15),h=a(3),p=a(4),v=a(6),b=a(5),g=a(7),f=(a(36),a(37),a(23)),E=Object(n.createContext)(),y=Object(n.createContext)({isAuthorized:!1}),k=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={darkMode:!1,isAuthorized:!1},a.auth0=new f.a.WebAuth({domain:"dev-adkw966q.eu.auth0.com",clientID:"2MIFRHkLZzEz5Pje5a8U99UboUia2MxK",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:"openid"}),a.changeTheme=function(){a.setState({darkMode:!a.state.darkMode},(function(){localStorage.setItem("dark",a.state.darkMode),console.log(a.state.darkMode)}))},a.authorize=function(){a.auth0.authorize()},a.logOut=function(){a.setState({isAuthorized:!1},(function(){return localStorage.setItem("Auth",a.state.isAuthorized)}))},a.handleAuthentication=function(){a.auth0.parseHash((function(e,t){t&&t.accessToken?(a.setState({isAuthorized:!0},(function(){a.props.history.push("/user")})),localStorage.setItem("Auth",a.state.isAuthorized)):e&&console.log(e)}))},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(localStorage.getItem("dark")),window.localStorage.length&&(this.setState({darkMode:JSON.parse(localStorage.getItem("dark"))},(function(){return console.log(e.state.darkMode)})),console.log("\u0417\u0430\u0441\u0435\u0442\u0430\u043d\u043e")),this.setState({isAuthorized:JSON.parse(localStorage.getItem("Auth"))}),console.log(this.state.darkMode),console.log(window.localStorage)}},{key:"render",value:function(){var e=this.state.isAuthorized;return o.a.createElement(y.Provider,{value:{isAuthorized:e,authorize:this.authorize,logOut:this.logOut,handleAuthentication:this.handleAuthentication}},o.a.createElement(E.Provider,{value:{darkMode:this.state.darkMode,changeTheme:this.changeTheme}},this.props.children))}}]),t}(n.Component);function N(e){return function(t){function a(){return Object(h.a)(this,a),Object(v.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(g.a)(a,t),Object(p.a)(a,[{key:"render",value:function(){var t=this;return o.a.createElement(y.Consumer,null,(function(a){return o.a.createElement(E.Consumer,null,(function(n){return o.a.createElement(e,Object.assign({},a,n,t.props))}))}))}}]),a}(n.Component)}var S=Object(s.g)(k),w=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={willWatch:!1},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.context.darkMode,a=this.props,n=a.results,r=a.key,c=a.addMovieToWillWatch,s=a.addMovieToHistory,l=a.removeMovieFromWillWatch;return o.a.createElement("div",{key:r,className:"movieTable marginAuto movieTableSmall width100Small ".concat(t?"darkTableMovie":"")},o.a.createElement("div",{className:"wrapper wrapperHeightSmall wrapperHeightMedium"},o.a.createElement("img",{className:"width100Small",src:"https://image.tmdb.org/t/p/w500".concat(n.backdrop_path||n.poster_path),alt:n.title})),o.a.createElement("h2",null,n.title),o.a.createElement("div",{className:"textOverview textOverviewSmall"},n.overview),o.a.createElement(i.b,{to:{pathname:"/MoviePage/".concat(n.id),state:{movie_id:n.id}}},o.a.createElement("button",{onClick:function(){return s(n)},className:"btn btn-danger buttonMorePositionSmall  buttonMorePosition float"},"More")),this.state.willWatch?o.a.createElement("button",{type:"button",className:"btn btn-danger buttonAddPositionSmall buttonAddPosition",onClick:function(){e.setState({willWatch:!1}),l(n)}},o.a.createElement("i",{className:"fas fa-heart"})):o.a.createElement("button",{type:"button",className:"btn btn-secondary buttonAddPositionSmall buttonAddPosition",onClick:function(){e.setState({willWatch:!0}),c(n)}},o.a.createElement("i",{className:"far fa-heart"})))}}]),t}(n.Component);w.contextType=E;var M=w,O=function(e){var t=Object(n.useContext)(E);return o.a.createElement("div",{className:"navPos pagination marginAuto"},o.a.createElement("button",{onClick:e.previousPage,className:" paginationButton ".concat(t.darkMode?"btn btn-secondary":"btn btn-warning")},o.a.createElement("i",{className:"fas fa-angle-double-left"})),e.children,o.a.createElement("button",{onClick:e.nextPage,className:" paginationButton ".concat(t.darkMode?"btn btn-secondary":"btn btn-warning")},o.a.createElement("i",{className:"fas fa-angle-double-right"})))},j=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context.darkMode,t=this.props,a=t.moviesWillWatch,n=t.togglePopup;return o.a.createElement("div",{className:"width-15"},o.a.createElement("button",{onClick:n,className:"cartWidth ".concat(e?"btn btn-secondary":"btn btn-warning")},o.a.createElement("i",{className:"fas fa-heart"}),a.length))}}]),t}(n.Component);j.contextType=E;var x=j,A=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context.darkMode,t=this.props,a=t.closePopup,n=t.moviesWillWatch;return o.a.createElement("div",{className:"popup"},o.a.createElement("div",{className:"popup_inner  width-80 popSmall d-flex f-wrap ".concat(e?"darkPopUp":"")},o.a.createElement("button",{onClick:a,className:" buttonPop ".concat(e?"btn btn-secondary popButton":"popButton btn btn-warning ")},o.a.createElement("i",{className:"fas fa-times"})),n.map((function(t){return o.a.createElement("div",{key:t.id,className:"movieTablePop movieTablePopSmall ".concat(e?"darkTableMovie":"")},o.a.createElement(i.b,{to:{pathname:"/MoviePage/".concat(t.id),state:{movie_id:t.id}}},o.a.createElement("img",{className:"recommendImg posterSmall",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title})),o.a.createElement("h6",null,t.title))}))))}}]),t}(o.a.Component);A.contextType=E;var P=A,W=(a(43),function(){var e=Object(n.useContext)(E);return o.a.createElement("div",null,o.a.createElement("div",{className:"cssload-container "},o.a.createElement("div",{className:e.darkMode?"dark":"cssload-speeding-wheel"})))}),T=function(e){return o.a.createElement("div",{className:"search  marginAuto"},o.a.createElement("form",{onSubmit:e.fetchSearchData,className:"form-inline searchSmall   marginAuto"},o.a.createElement("input",{className:"form-control mr-sm-2",name:"input",type:"search",placeholder:"Search","aria-label":"Search"}),o.a.createElement("button",{className:"btn btn-outline-danger my-2 my-sm-0 searchButton",type:"submit"},o.a.createElement("i",{className:"fas fa-search"})),e.isLoadedSearch?o.a.createElement(W,null):""))},C=(a(44),function(){return o.a.createElement("div",{className:"z-index"},o.a.createElement("div",{className:"cssload-dots"},o.a.createElement("div",{className:"cssload-dot"}),o.a.createElement("div",{className:"cssload-dot"}),o.a.createElement("div",{className:"cssload-dot"}),o.a.createElement("div",{className:"cssload-dot"}),o.a.createElement("div",{className:"cssload-dot"})),o.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("defs",null,o.a.createElement("filter",{id:"goo"},o.a.createElement("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:"12"}),o.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0\t0 1 0 0 0\t0 0 1 0 0\t0 0 0 18 -7",result:"goo"})))))}),_=(a(45),"34c6dd52b40998a7fba114d180097301"),I=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={results:[],page:1,totalPages:null,moviesWillWatch:[],showPopup:!1,isLoaded:!1,isLoadedSearch:!1,search:!1,input:null},a.nextPage=function(){500!==a.state.page&&a.setState({page:a.state.page+1}),console.log(a.state.page)},a.previousPage=function(){1!==a.state.page&&a.setState({page:a.state.page-1})},a.setPage=function(e){a.setState({page:e})},a.totalPages=function(){return a.state.totalPages<=10?a.state.totalPages:10},a.fetchSearch=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.state.input){e.next=9;break}return e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(_,"&language=en-US&query=").concat(a.state.input,"&page=").concat(a.state.page,"&include_adult=false"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a.setState({results:n.results,totalPages:n.total_pages,isLoadedSearch:!1}),console.log(n);case 9:case"end":return e.stop()}}),e)}))),a.fetchSearchData=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoadedSearch:!0,search:!0,page:1}),n=t.target.elements.input.value,t.preventDefault(),e.next=5,a.setState({input:n});case 5:return console.log(a.state.input),e.next=8,a.fetchSearch();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.fetchData=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(_,"&language=en-US&page=").concat(a.state.page));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a.setState({results:n.results,totalPages:n.total_pages,isLoaded:!0}),console.log(n);case 8:case"end":return e.stop()}}),e)}))),a.componentDidMount=function(){a.fetchData()},a.addMovieToHistory=function(e){var t=[JSON.parse(localStorage.getItem("history"))].flat(10);console.log(t),null===t[0]&&t.splice(0,1),t.push(e),localStorage.setItem("history",JSON.stringify(t))},a.addMovieToWillWatch=function(e){var t=Object(l.a)(a.state.moviesWillWatch);t.push(e),a.setState({moviesWillWatch:t})},a.removeMovieFromWillWatch=function(e){var t=a.state.moviesWillWatch.filter((function(t){return t.id!==e.id}));a.setState({moviesWillWatch:t})},a.togglePopup=function(){a.setState({showPopup:!a.state.showPopup})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){t.page!==this.state.page&&(this.state.search?this.fetchSearch():this.fetchData())}},{key:"render",value:function(){var e=this,t=this.context,a=t.darkMode,n=t.changeTheme;return o.a.createElement("div",{className:"".concat(a?"darkBody":""," ")},o.a.createElement("div",{className:"App container marginAuto position-relative ".concat(a?"darkBodySite":"")},o.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light marginAuto header red d-flex justify-content-around ".concat(a?"darkHeader":"")},o.a.createElement("h2",{className:"HeaderText"},"MovieApp"),o.a.createElement("div",{className:"navPosButtons"},o.a.createElement("button",{className:a?"btn btn-secondary":"btn btn-warning",onClick:function(){n()}},a?o.a.createElement("i",{className:"fas fa-sun"}):o.a.createElement("i",{className:"fas fa-moon"})),o.a.createElement(i.b,{to:"/user"},o.a.createElement("button",{className:a?"btn btn-secondary":"btn btn-warning"},o.a.createElement("i",{className:"fas fa-user"}))),o.a.createElement(x,{moviesWillWatch:this.state.moviesWillWatch,togglePopup:this.togglePopup}),this.state.showPopup?o.a.createElement(P,{closePopup:this.togglePopup,moviesWillWatch:this.state.moviesWillWatch}):null)),o.a.createElement(T,{fetchSearchData:this.fetchSearchData,isLoadedSearch:this.state.isLoadedSearch}),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"movies width-90 marginAuto"},this.state.isLoaded?"":o.a.createElement(C,null),this.state.results.map((function(t){return o.a.createElement(M,{results:t,key:t.id,addMovieToWillWatch:e.addMovieToWillWatch,addMovieToHistory:e.addMovieToHistory,removeMovieFromWillWatch:e.removeMovieFromWillWatch})})))),this.state.isLoaded?o.a.createElement(O,{nextPage:this.nextPage,previousPage:this.previousPage},new Array(this.totalPages()).fill(1).map((function(t,n){return o.a.createElement("button",{className:"".concat(e.state.page===n+1?"btn btn-danger":"".concat(a?"btn btn-secondary":"btn btn-warning")),onClick:function(){return e.setPage(n+1)},key:n},n+1)}))):""))}}]),t}(n.Component);I.contextType=E;var z=I,B=function(e){var t=Object(n.useContext)(E);return o.a.createElement("div",{className:"movies width-80 marginAuto"},e.recommend.map((function(a){return o.a.createElement("div",{className:"marginAuto",key:a.id},o.a.createElement("div",{className:"movieTableRecommends marginAuto movieTablePopSmall ".concat(t.darkMode?"darkTableMovie colorText":""),onClick:e.movieId},o.a.createElement(i.b,{className:"colorText",to:{pathname:"/MoviePage/".concat(a.id),state:{movie_id:a.id}}},o.a.createElement("img",{onClick:function(){return e.addHistory(a)},className:"recommendImg posterSmall",src:"https://image.tmdb.org/t/p/w500".concat(a.poster_path),alt:a.title})),o.a.createElement("h6",null,a.title)))})))},D=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex secondPage margin"},o.a.createElement("div",{className:"imgDiv"},o.a.createElement("img",{className:"poster secondPoster",src:"https://image.tmdb.org/t/p/w500".concat(e.activeMovie.poster_path),alt:e.activeMovie.title})),o.a.createElement("div",null,o.a.createElement("h2",null,e.activeMovie.title),o.a.createElement("h4",null,e.activeMovie.tagline),o.a.createElement("div",null,e.activeMovie.overview),o.a.createElement("h6",null,"Rating: ",e.activeMovie.vote_average),o.a.createElement("h6",null,"Budget: ",e.activeMovie.budget,"$"),o.a.createElement("h6",null,"Status: ",e.activeMovie.status),o.a.createElement("h6",null,"Release Date: ",e.activeMovie.release_date))))},H=function(e){return o.a.createElement("div",{className:"video"},o.a.createElement("iframe",{className:"videoSize videoSizeMed",src:"https://www.youtube.com/embed/".concat(e.videos),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},L="34c6dd52b40998a7fba114d180097301",U=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={activeMovie:[],recommend:[],videos:[],movie_id:null},a.fetchOneMovie=Object(d.a)(u.a.mark((function e(){var t,n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.movie_id,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(L,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,a.setState({activeMovie:o});case 8:case"end":return e.stop()}}),e)}))),a.fetchSimiliar=Object(d.a)(u.a.mark((function e(){var t,n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.movie_id,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/similar?api_key=").concat(L,"&language=en-US&page=1"));case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,a.setState({recommend:o.results,movie_id:o.results.id});case 8:case"end":return e.stop()}}),e)}))),a.fetchVideos=Object(d.a)(u.a.mark((function e(){var t,n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.location.state.movie_id,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat(L,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:o=e.sent,a.setState({videos:o.results[0].key});case 8:case"end":return e.stop()}}),e)}))),a.componentDidMount=function(){a.fetchOneMovie(),a.fetchSimiliar(),a.fetchVideos()},a.addHistory=function(e){var t=[JSON.parse(localStorage.getItem("history"))].flat(10);console.log(t),null===t[0]&&t.splice(0,1),t.push(e),localStorage.setItem("history",JSON.stringify(t))},a.componentDidUpdate=function(e){a.state.movie_id!==e.movie_id&&a.componentDidMount()},a.movieId=function(){a.setState({movie_id:a.props.location.state.movie_id})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.context,t=e.darkMode,a=e.changeTheme;return o.a.createElement("div",{className:"body width100Small  ".concat(t?"darkBody":""," ")},o.a.createElement("div",{className:"container width100Small marginAuto ".concat(t?"darkBodySite":"")},o.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light header red margin ".concat(t?"darkHeader":"")},o.a.createElement(i.b,{to:"/"},o.a.createElement("button",{className:t?"btn btn-secondary":"btn btn-warning"},o.a.createElement("i",{className:"fas fa-arrow-left"}))),o.a.createElement("button",{className:t?"btn btn-secondary":"btn btn-warning",onClick:function(){a()}},t?o.a.createElement("i",{className:"fas fa-sun"}):o.a.createElement("i",{className:"fas fa-moon"}))),o.a.createElement(D,{activeMovie:this.state.activeMovie}),o.a.createElement(H,{videos:this.state.videos}),o.a.createElement("div",{className:"marginAuto"},o.a.createElement("h2",null,"Recommendations:"),o.a.createElement(B,{movieId:this.movieId,addHistory:this.addHistory,recommend:this.state.recommend}))))}}]),t}(o.a.Component);U.contextType=E;var J=U,F=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={history:!0},a.deleteHistory=function(){localStorage.removeItem("history"),a.setState({history:!1})},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(y.Consumer,null,(function(t){return o.a.createElement(E.Consumer,null,(function(a){return o.a.createElement("div",{className:a.darkMode?"darkBody":""},o.a.createElement("div",{className:"App container ".concat(a.darkMode?"darkBodySite":"")},o.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light header red margin ".concat(a.darkMode?"darkHeader":"")},o.a.createElement(i.b,{to:"/"},o.a.createElement("button",{className:a.darkMode?"btn btn-secondary":"btn btn-warning"},o.a.createElement("i",{className:"fas fa-arrow-left"}))),o.a.createElement("div",null,o.a.createElement("button",{className:a.darkMode?"btn btn-secondary":"btn btn-warning",onClick:e.deleteHistory},o.a.createElement("i",{className:"fas fa-trash"})),o.a.createElement("button",{className:a.darkMode?"btn btn-secondary":"btn btn-warning",onClick:function(){a.changeTheme()}},a.darkMode?o.a.createElement("i",{className:"fas fa-sun"}):o.a.createElement("i",{className:"fas fa-moon"})),o.a.createElement("button",{className:a.darkMode?"btn btn-secondary":"btn btn-warning",onClick:t.logOut},"Log out"))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-start"},JSON.parse(localStorage.getItem("history"))&&e.state.history?JSON.parse(localStorage.getItem("history")).map((function(e){return o.a.createElement("div",{className:"marginAuto",key:e.id},o.a.createElement("div",{className:"movieTableRecommends movieTablePopSmall marginAuto ".concat(a.darkMode?"darkTableMovie colorText":"")},o.a.createElement(i.b,{className:"colorText",to:{pathname:"/MoviePage/".concat(e.id),state:{movie_id:e.id}}},o.a.createElement("img",{className:"recommendImg posterSmall",src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.title})),o.a.createElement("h6",null,e.title)))})):o.a.createElement("div",null,o.a.createElement("h2",null,"Your story is empty")))))}))}))}}]),t}(n.Component),R=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.handleAuthentication;e&&e()}},{key:"render",value:function(){var e=this.context.darkMode;return o.a.createElement("div",{className:e?"darkBody App":"App"},o.a.createElement(C,null))}}]),t}(n.Component);R.contextType=E;var q=N(R),G=N((function(e){var t=e.isAuthorized,a=e.authorize,n=e.darkMode,r=e.changeTheme;return t?o.a.createElement(s.a,{to:"/"}):o.a.createElement("div",{className:"".concat(n?"darkBody App":"App")},o.a.createElement("div",{className:n?"darkBody":""},o.a.createElement("div",{className:"App container ".concat(n?"darkBodySite":"")},o.a.createElement("nav",{className:"navbar sticky-top navbar-light bg-light header red margin ".concat(n?"darkHeader":"")},o.a.createElement(i.b,{to:"/"},o.a.createElement("button",{className:n?"btn btn-secondary":"btn btn-warning"},o.a.createElement("i",{className:"fas fa-arrow-left"}))),o.a.createElement("button",{className:n?"btn btn-secondary":"btn btn-warning",onClick:function(){r()}},n?o.a.createElement("i",{className:"fas fa-sun"}):o.a.createElement("i",{className:"fas fa-moon"}))),o.a.createElement("div",{className:n?"darkTableMovie login":"login"},o.a.createElement("h1",{className:"loginText"},"Log in to open"),o.a.createElement("button",{onClick:a,className:"btn btn-danger logBtn"},"Log in")))))})),V=a(26),$=N((function(e){var t=e.component,a=e.isAuthorized,n=Object(V.a)(e,["component","isAuthorized"]);return o.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?o.a.createElement(t,e):o.a.createElement(s.a,{to:"/login"})}}))})),K=function(){return o.a.createElement(i.a,{basename:"/my-app"},o.a.createElement(S,null,o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/",component:z,exact:!0}),o.a.createElement(s.b,{path:"/moviePage/:id",component:J}),o.a.createElement(s.b,{path:"/login",component:G}),o.a.createElement(s.b,{path:"/callback",component:q}),o.a.createElement($,{path:"/user",component:F}),o.a.createElement(s.b,{component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.deaf03de.chunk.js.map