function CurrentDateTime(){
    const currdate = new Date().toLocaleDateString();
    const currtime= new Date().toLocaleTimeString();

    return (
        <>
        <p>Current Date is: {currdate}</p>
        <p>Current Time is: {currtime}</p>

        </>
    );
}

export default CurrentDateTime