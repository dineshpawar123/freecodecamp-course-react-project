import projectReducer from './Projects/projectReducer';
import quoteReducer from './Quotes/quotesReducer';
import calculatorReducer from './Calculator/calculatorReducer';
import drumReducer from './Drum/drumReducer'
import { markDownPreviewReducer } from './MarkDownPreview/markDownPreviewReducer';
import { clockReducer } from './Clock/clockReducer';
import authReducer from './Auth/authReducer';

const rootReducer = {
    openProject: projectReducer,
    incrementIndex: quoteReducer,
    calculator: calculatorReducer,
    drum: drumReducer,
    markdown: markDownPreviewReducer,
    clock: clockReducer,
    auth: authReducer
};

export default rootReducer;