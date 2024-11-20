// import React, { useState } from "react";
// import "./style.css"; // Make sure to have your styles in place

// const ImageGenerator = () => {
//     // State to store input text, image source, and loading status
//     const [inputText, setInputText] = useState("");
//     const [imageSrc, setImageSrc] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // The Hugging Face token
//     const token = "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";

//     // Function to query Hugging Face API and get the generated image
//     const query = async (data) => {
//         setLoading(true); // Set loading state to true while waiting for the image
//         try {
//             const response = await fetch(
//                 "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         "Content-Type": "application/json",
//                     },
//                     method: "POST",
//                     body: JSON.stringify(data),
//                 }
//             );
//             const result = await response.blob(); // Get the image as a blob
//             setLoading(false); // Set loading state to false after receiving the image
//             return result;
//         } catch (error) {
//             setLoading(false); // Set loading state to false in case of error
//             console.error("Error fetching image:", error);
//             alert("Failed to fetch image. Please try again!");
//         }
//     };

//     // Handle button click to generate the image
//     const handleGenerate = async () => {
//         if (inputText.trim() === "") {
//             alert("Please enter a prompt!");
//             return;
//         }

//         const response = await query({ inputs: inputText });
//         if (response) {
//             const objectURL = URL.createObjectURL(response); // Create an object URL from the image blob
//             setImageSrc(objectURL); // Set the image source in state
//         }
//     };

//     return (
//         <div className="image-generator">
//             <h2>Text to Image Generator</h2>
//             <label htmlFor="input">Create an image from text prompt:</label>
//             <input
//                 type="text"
//                 id="input"
//                 placeholder="Enter your prompt here"
//                 value={inputText}
//                 onChange={(e) => setInputText(e.target.value)} // Update state on input change
//                 style={{ padding: "10px", width: "300px", margin: "10px 0" }}
//             />
//             <br />
//             <button
//                 id="btn"
//                 className="button-85"
//                 onClick={handleGenerate} // Call handleGenerate on button click
//                 style={{ padding: "10px 20px", margin: "10px" }}
//             >
//                 Generate
//             </button>
//             <br />
//             {loading ? (
//                 <img
//                     src="/loading.gif" // Ensure this image exists in your public folder
//                     alt="Loading..."
//                     style={{ marginTop: "20px" }}
//                 />
//             ) : (
//                 imageSrc && <img id="image" src={imageSrc} alt="Generated" style={{ marginTop: "20px", maxWidth: "100%" }} />
//             )}
//         </div>
//     );
// };

// export default ImageGenerator;
