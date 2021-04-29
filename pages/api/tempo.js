function tempo(request, responde){
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGMTString()
    });
}

export default tempo;