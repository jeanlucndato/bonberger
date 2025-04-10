import Sidebar from "../components/AdminComponent/Sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen"> {/* Ajout de min-h-screen pour que le flex prenne au moins la hauteur de l'écran */}
            <Sidebar />
            <div className="flex-1 bg-gray-50 p-8"> {/* Ajout d'un conteneur pour le contenu principal */}
                {children}
            </div>
        </div>
    );
}