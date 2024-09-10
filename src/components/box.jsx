
const box = ({task, isName}) => {
    return (
        <div>
            <h1>name is {isName ? task : 'name is not available'}</h1>
        </div>
    );
};

export default box;