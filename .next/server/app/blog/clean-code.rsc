1:HL["/_next/static/media/90475aac776488b6-s.p.woff2",{"as":"font","type":"font/woff2"}]
2:HL["/_next/static/media/a34f9d1faa5f3315-s.p.woff2",{"as":"font","type":"font/woff2"}]
3:HL["/_next/static/css/12de45ccdef5d28b.css",{"as":"style"}]
4:HL["/_next/static/css/7e00983ab17ac3b6.css",{"as":"style"}]
0:["Y1nJHUDw1R4vMxPhiP3V5",[[["",{"children":["blog",{"children":["clean-code",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],"$L5",[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/12de45ccdef5d28b.css","precedence":"next"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/7e00983ab17ac3b6.css","precedence":"next"}]],"$L6"]]]]
7:HL["/_next/static/css/b969c315eee527bb.css",{"as":"style"}]
8:I{"id":5213,"chunks":["559:static/chunks/559-ac70964c2181af5b.js","691:static/chunks/691-469415b057fb1574.js","396:static/chunks/396-4fa4cd453b368b48.js","870:static/chunks/870-a479506b8e02c92c.js","185:static/chunks/app/layout-d41301aef74df37b.js"],"name":"Sidebar","async":false}
9:I{"id":7767,"chunks":["272:static/chunks/webpack-fb7af22d7368b858.js","971:static/chunks/fd9d1056-828e77a11ad50db3.js","596:static/chunks/596-29926889f9012df1.js"],"name":"default","async":false}
a:I{"id":7920,"chunks":["272:static/chunks/webpack-fb7af22d7368b858.js","971:static/chunks/fd9d1056-828e77a11ad50db3.js","596:static/chunks/596-29926889f9012df1.js"],"name":"default","async":false}
c:I{"id":2121,"chunks":["559:static/chunks/559-ac70964c2181af5b.js","691:static/chunks/691-469415b057fb1574.js","396:static/chunks/396-4fa4cd453b368b48.js","395:static/chunks/app/blog/clean-code/page-dd8ab70f13e56c63.js"],"name":"BlogLayout","async":false}
d:I{"id":4519,"chunks":["559:static/chunks/559-ac70964c2181af5b.js","691:static/chunks/691-469415b057fb1574.js","396:static/chunks/396-4fa4cd453b368b48.js","395:static/chunks/app/blog/clean-code/page-dd8ab70f13e56c63.js"],"name":"CodeWindow","async":false}
f:I{"id":8099,"chunks":["559:static/chunks/559-ac70964c2181af5b.js","691:static/chunks/691-469415b057fb1574.js","396:static/chunks/396-4fa4cd453b368b48.js","870:static/chunks/870-a479506b8e02c92c.js","185:static/chunks/app/layout-d41301aef74df37b.js"],"name":"Footer","async":false}
e:T7e9,import React from "react";
import { motion } from "framer-motion";

export const BoxesContainer = () => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className="absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 "
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8  border-l  border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8  border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

5:[null,["$","html",null,{"lang":"en","children":["$","body",null,{"className":"__className_0ef218 flex antialiased h-screen overflow-hidden bg-gray-100","children":[["$","$L8",null,{}],["$","div",null,{"className":"lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto","children":["$","div",null,{"className":"flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto","children":[["$","$L9",null,{"parallelRouterKey":"children","segmentPath":["children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"childProp":{"current":["$","$L9",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":["$","$L9",null,{"parallelRouterKey":"children","segmentPath":["children","blog","children","clean-code","children"],"loading":"$undefined","loadingStyles":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","template":["$","$La",null,{}],"templateStyles":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","childProp":{"current":["$Lb",["$","$Lc",null,{"meta":{"date":"2023-08-18","title":"Writing Clean Code With React","description":"Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.","image":"https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","tags":["Clean Code"]},"children":[["$","p",null,{"children":"Velit cillum fugiat proident pariatur anim proident laborum incididunt magna in labore adipisicing veniam quis. Ut et exercitation dolor in enim quis. Et est excepteur exercitation voluptate in qui duis nulla in anim ut commodo deserunt nisi. Dolor pariatur irure occaecat Lorem mollit veniam adipisicing."}],"\n",["$","p",null,{"children":"Deserunt qui ea do et laborum ad id. Tempor laborum aute fugiat tempor eu. Amet sint sint proident pariatur eiusmod mollit excepteur excepteur. Dolore cillum nulla enim tempor ad."}],"\n",["$","p",null,{"children":"Laborum quis proident ut anim consectetur. Consequat fugiat eiusmod qui officia duis eu minim cillum do qui. Sunt sit veniam minim ad id sunt magna est enim."}],"\n",["$","p",null,{"children":"Consectetur est sunt minim culpa quis aute officia incididunt ea laboris nulla officia dolor. Cupidatat cupidatat esse veniam cillum labore ullamco aliqua ex. Cillum incididunt ipsum laborum dolor enim incididunt consectetur id consectetur magna. Consequat mollit non ea cupidatat exercitation. Consequat reprehenderit eiusmod nisi ea esse id ut est consequat eu aliqua do quis."}],"\n",["$","p",null,{"children":"Occaecat commodo velit ea consectetur ut sit. Duis eiusmod ad tempor nisi magna dolore incididunt ea dolore. Commodo proident eiusmod consequat cupidatat consectetur adipisicing dolor commodo tempor labore non dolore Lorem consectetur."}],"\n",["$","h2",null,{"children":"Code Snippet"}],"\n",["$","$Ld",null,{"title":"BoxesContainer.tsx","children":["$","pre",null,{"children":["$","code",null,{"className":"language-TSX","children":"$e"}]}]}]]}],null],"segment":"__PAGE__"},"styles":[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/b969c315eee527bb.css","precedence":"next"}]]}],"segment":"clean-code"},"styles":[]}],"segment":"blog"},"styles":[]}],["$","$Lf",null,{}]]}]}]]}]}],null]
6:[["$","meta","0",{"charSet":"utf-8"}],["$","title","1",{"children":"Benjamin Saenz - Computer Engineering Student"}],["$","meta","2",{"name":"description","content":"Benjamin Saenz is a Computer Engineering Student. He is passionate about technology and its potential to transform lives."}],["$","meta","3",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","link","4",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}],["$","meta","5",{"name":"next-size-adjust"}]]
b:null
