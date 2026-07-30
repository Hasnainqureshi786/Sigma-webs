 let randm= Math.random();
              let first,sec,third;
              if(randm<0.33){
      first="crazy";
              }
             else if(randm>=0.33&&randm<0.66){
              first="amazing"}
              else{
                  first="fire"
              }
            //   second no
               randm=Math.random();            
              if(randm<0.33){
                sec="engine";
              }
             else if(randm>=0.33&&randm<0.66){
              sec="foods"}
              else{
                  sec="garments"
              }
            //   third no
               randm=Math.random();
              if(randm<0.33){
      third="hub";
              }
             else if(randm>=0.33&&randm<0.66){
              third=" bros"}
              else{
                  third=" limitted"
              }
              console.log(`${first} ${sec} ${third}`);