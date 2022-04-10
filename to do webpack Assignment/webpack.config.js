const path=require('path');

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(".","build"), //foldername
        filename:"bundle.js"  //filename inside the folder
    },
    mode:"development",
    module:{
        rules:[
            {
                test:/\.css$/, use:["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              },
         ],
        
    },
};