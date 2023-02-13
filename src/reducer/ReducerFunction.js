// import {SAMPLE_PRDDUCTS} from '../dummydata/DummyData'
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "../actions/ActionConstant";

const initialState = {
  products: [
    {
      id: "p1",
      price: 126,
      title: "Man Perfume",
      description: "Denver - Hamilton",
    },
    {
      id: "p2",
      price: 125,
      title: "Man Deo",
      description: "Navia - 24 hours refreshment",
    },
  ],
  addItems: [],
  totalquantity: 0,
};
console.log("Products : ", initialState.products);
// console.log("Total : ",initialState.total);

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = state.products.find(
        (product) => product.id === action.payload.id
      );
      // console.log("New added : ", state.products.title)
      console.log("New added : ", addedItem);

      //check if the action id exists in the addedItems
      const existed_item = state.addItems.find((product) =>
        product.id === action.payload.id ? true : false
      );
      console.log("Existing : ", existed_item);

      return {
        ...state,
        addItems: existed_item
          ? state.addItems.map((product) =>
              product.id === action.payload.id
                ? {
                    ...product,
                    quantity: product.quantity + 1,
                  }
                : product
            )
          : [...state.addItems, { ...addedItem, quantity: 1 }],
          totalquantity: state.totalquantity + 1 
      };

    case REMOVE_ITEM:

      const quantity = state.addItems.find((product) => {
        if (product.id === action.payload.id) {
          return product.quantity;
        }
      });

      // const quantity = state.addItems[action.payload.id].quantity;
      console.log({ quantity });
      if (quantity.quantity >= 1) {
        return {
          ...state,
          addItems: state.addItems.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity - 1,
                }
              : product
          ),
          totalquantity: state.totalquantity - 1
        };
      }

    default:
      return state;
  }
};

export { CartReducer };
