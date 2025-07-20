import componentImg from "./assets/components.png";
import configImg from "./assets/config.png"
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png"

export const CORE_CONCEPTS = [

    {
        image: componentImg,
        title : 'Components',
        description :
        'The core UI building block - compose the user interface by combining multiple components.'
    },
    {
        image: jsxImg,
        title : 'JSX',
        description:'Return (potentially dynamic) HTML (ish) code to define the actual markup that will be rendered.'
    },
    {
        image: configImg,
        title :'Props' ,
        description:'Make components configurable (and therefore reusable) by passing input data to them.'
    },
    {
        image: stateImg,
        title : 'State',
        description: 'React-managed data which, when changed.Causes the component to re-render & the UI to update.'
    },

]