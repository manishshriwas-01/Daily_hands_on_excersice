// Requirements:

// Fetch User Details
// Fetch User Posts
// Use async/await
// Use Promise.all()
// Use try...catch
// Use a loading flag
// Handle errors

let loading=false;

async function loadDashboard() {
    try{
        //start loading
        loading=true;
        console.log("Loading: ",loading);
        
        // Run both API calls simultaneously

        const[userResponse,postsResponse]=await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        ])

         // Check if request failed
        if (!userResponse.ok || !postsResponse.ok) {
            throw new Error("Failed to fetch data");
        }
        //convert to json

        const user= await userResponse.json();
        const posts=await postsResponse.json();
        console.log("\n===== USER DETAILS =====");
        console.log("Name :", user.name);
        console.log("Email:", user.email);
        console.log("City :", user.address.city);

        console.log("\n===== POSTS =====");

        posts.forEach((post,index)=>{
            console.log(`${index + 1}. ${post.title}`);
        })

    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        loading = false;
        console.log("\nLoading:", loading);

    }
}

loadDashboard();