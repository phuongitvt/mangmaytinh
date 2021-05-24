import { ApplicationContext } from './ApplicationContext';
import { useContext } from 'react';

function MainScreen() {
    console.log('MainScreen');
    const { state } = useContext(ApplicationContext);

    return (
        <div>
            {/*<p>You clicked {state.counter} times</p>*/}
        </div>
    );
}

export default MainScreen;
