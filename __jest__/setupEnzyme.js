import raf from './rafPolyfill'; // eslint-disable-line no-unused-vars
import IO from './IOPolyfill'; // eslint-disable-line no-unused-vars
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
