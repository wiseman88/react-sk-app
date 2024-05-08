const ProductOrderList = () => {
    const ordersList = []
    const l = 13

    for (let i = 1; i < l; i++) {
        i != l - 1
            ? ordersList.push(
                <p className='text-blue-500' key={i}>
                    Objednávka {i},&nbsp;
                </p>
            )
            : ordersList.push(
                <p className='text-blue-500' key={i}>
                    Objednávka {i}
                </p>
            )
    }

    return (
        <>
            <div className='flex flex-wrap justify-center mt-6'>
                {ordersList}
            </div>
        </>
    )
}

export default ProductOrderList