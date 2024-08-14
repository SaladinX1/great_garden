import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trees : [],
    // isLockTree : false,
    isLockShop: false,
    price: 200
}

export const magasin = createSlice({
name: "magasin",
initialState,
reducers: {
    setTrees: (state, action) => {
        
        state.trees = action.payload;

            const groups = []; // Objet pour stocker les groupes par préfixe
        
            state.trees.forEach(element => {
                const prefix = element.slice(0, 3); // Obtenir les 3 premiers caractères
        
                if (!groups[prefix]) {
                    // Si aucun groupe n'existe pour ce préfixe, créer un nouveau sous-tableau
                    groups[prefix] = [];
                }
                
                // Ajouter l'élément au sous-tableau correspondant
                groups[prefix].push(element);
            });
        
            // Convertir l'objet en tableau de sous-tableaux
           // console.log( Object.values(groups));

               state.trees = Object.values(groups);

           // console.log(state.trees);
        
        },
       treesLevels: (state,action) => {
        if(action.payload < 2) {
            for(let treeSet of state.trees) {
              for(let tree of treeSet){
                if(treeSet.length == 1) {
                    state.trees.push(treeSet)
                  console.log(treeSet);
                  } else {
                    treeSet.pop()
                  }
                }
              }
            }
            else if(action.payload == 2) {
                for(let treeSet of state.trees) {
                  for(let tree of treeSet){
                    if(treeSet.length == 2) {
                        state.trees.push(treeSet)
                      console.log(treeSet);
                      } else {
                        treeSet.pop()
                      }
                    }
                  }
                }
       },
       lockShop: (state, action) => {
        state.isLockShop = !state.isLockShop
       }
    }
})

export default magasin.reducer
export const { setTrees, treesLevels, lockShop } = magasin.actions