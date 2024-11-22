import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


// export default function HomePage() {
//   const [currentPage, setCurrentPage] = useState("Home");

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Main Content */}
//       <View style={styles.mainContent}>
//         {currentPage === "Home" && (
//           <>
//             <Text style={styles.title}>QR Code Generator</Text>
//             <Text style={styles.subtitle}>Create and Share QR Codes</Text>

//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => alert("Navigate to Generate QR Code")}
//             >
//               <Text style={styles.buttonText}>Generate QR Code</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => alert("Navigate to Saved QR Codes")}
//             >
//               <Text style={styles.buttonText}>View Saved Codes</Text>
//             </TouchableOpacity>
//           </>
//         )}
//         {currentPage !== "Home" && (
//           <Text
//             style={styles.pageContent}
//           >{`${currentPage} Page Content`}</Text>
//         )}
//       </View>

//       {/* Bottom Navigation Bar */}
//       <View style={styles.bottomNavBar}>
//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => setCurrentPage("Home")}
//         >
//           <Ionicons
//             name="home-outline"
//             size={24}
//             color={currentPage === "Home" ? "#0e387a" : "#fff"}
//           />
//           <Text
//             style={[
//               styles.navText,
//               currentPage === "Home" && styles.activeNavText,
//             ]}
//           >
//             Home
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => setCurrentPage("Profile")}
//         >
//           <Ionicons
//             name="person-circle-outline"
//             size={24}
//             color={currentPage === "Profile" ? "#0e387a" : "#fff"}
//           />
//           <Text
//             style={[
//               styles.navText,
//               currentPage === "Profile" && styles.activeNavText,
//             ]}
//           >
//             Profile
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => setCurrentPage("Settings")}
//         >
//           <Ionicons
//             name="settings-outline"
//             size={24}
//             color={currentPage === "Settings" ? "#0e387a" : "#fff"}
//           />
//           <Text
//             style={[
//               styles.navText,
//               currentPage === "Settings" && styles.activeNavText,
//             ]}
//           >
//             Settings
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => setCurrentPage("About Us")}
//         >
//           <Ionicons
//             name="information-circle-outline"
//             size={24}
//             color={currentPage === "About Us" ? "#0e387a" : "#fff"}
//           />
//           <Text
//             style={[
//               styles.navText,
//               currentPage === "About Us" && styles.activeNavText,
//             ]}
//           >
//             About Us
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.navItem}
//           onPress={() => setCurrentPage("Terms")}
//         >
//           <Ionicons
//             name="document-text-outline"
//             size={24}
//             color={currentPage === "Terms" ? "#0e387a" : "#fff"}
//           />
//           <Text
//             style={[
//               styles.navText,
//               currentPage === "Terms" && styles.activeNavText,
//             ]}
//           >
//             Terms
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f0f5",
//   },
//   mainContent: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 16,
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#666",
//     marginBottom: 40,
//   },
//   button: {
//     backgroundColor: "#0e387a",
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     marginBottom: 20,
//     width: "60%",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 10,
//     elevation: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   pageContent: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   bottomNavBar: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "#9fafca",
//     paddingVertical: 10,
//     // position:'absolute'
//   },
//   navItem: {
//     alignItems: "center",
//   },
//   navText: {
//     color: "white",
//     fontSize: 12,
//     marginTop: 4,
//   },
//   activeNavText: {
//     color: "blue",
//   },
// });

const HomePage = () => {
    return  (
        <View>
            <Text>
                This is home screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default HomePage;
