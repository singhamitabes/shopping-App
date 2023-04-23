//Services for Maincategory
export async function addMaincategoryAPI(data){
    var response = await fetch("/maincategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
export async function getMaincategoryAPI(){
    var response = await fetch("/maincategory")
    return await response.json()  
}
export async function deleteMaincategoryAPI(data){
    var response = await fetch("/maincategory/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
export async function updateMaincategoryAPI(data){
    var response = await fetch("/maincategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()  
}


//Services for Subcategory
export async function addSubcategoryAPI(data){
    var response = await fetch("/subcategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
export async function getSubcategoryAPI(){
    var response = await fetch("/subcategory")
    return await response.json()  
}
export async function deleteSubcategoryAPI(data){
    var response = await fetch("/subcategory/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
export async function updateSubcategoryAPI(data){
    var response = await fetch("/subcategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()  
}

//Services for Brand
export async function addBrandAPI(data){
    var response = await fetch("/brand",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
export async function getBrandAPI(){
    var response = await fetch("/brand")
    return await response.json()  
}
export async function deleteBrandAPI(data){
    var response = await fetch("/brand/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
export async function updateBrandAPI(data){
    var response = await fetch("/brand/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()  
}


//Services for Product
export async function addProductAPI(data){
    var response = await fetch("/product",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
export async function getProductAPI(){
    var response = await fetch("/product")
    return await response.json()  
}
export async function deleteProductAPI(data){
    var response = await fetch("/product/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
export async function updateProductAPI(data){
    var response = await fetch("/product/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()  
}

//Services for User
export async function addUserAPI(data){
    var response = await fetch("/user",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
export async function getUserAPI(data){
    var response = await fetch("/user")
    return await response.json()  
}
export async function getSingleUserAPI(data){
    var response = await fetch("/user/"+data.id)
    return await response.json()  
}
export async function deleteUserAPI(data){
    var response = await fetch("/user/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
export async function updateUserAPI(data){
    var response = await fetch("/user/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()  
}


//Services for Cart
export async function addCartAPI(data){
    var response = await fetch("/cart",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
export async function getCartAPI(){
    var response = await fetch("/cart")
    return await response.json()  
}
export async function deleteCartAPI(data){
    var response = await fetch("/cart/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
export async function updateCartAPI(data){
    var response = await fetch("/cart/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()  
}



//Services for Wishlist
export async function addWishlistAPI(data){
    var response = await fetch("/wishlist",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
export async function getWishlistAPI(){
    var response = await fetch("/wishlist")
    return await response.json()  
}
export async function deleteWishlistAPI(data){
    var response = await fetch("/wishlist/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}


//Services for Checkout
export async function addCheckoutAPI(data){
    var response = await fetch("/checkout",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data.payload)
    })
    return await response.json()  
}
export async function getCheckoutAPI(){
    var response = await fetch("/checkout")
    return await response.json()  
}
export async function deleteCheckoutAPI(data){
    var response = await fetch("/checkout/"+data.payload.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()  
}
export async function updateCheckoutAPI(data){
    var response = await fetch("/checkout/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()  
}
