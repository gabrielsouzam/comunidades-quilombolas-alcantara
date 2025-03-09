
interface MarkerProps {
    id: number;
    x: number;
    y: number;
    isSelected: boolean;
    isHovered: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const Marker: React.FC<MarkerProps> = ({ x, y, isSelected, isHovered, onClick, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                position: "absolute",
                top: `${y}%`,
                left: `${x}%`,
                transform: "translate(-50%, -100%)",
                width: isSelected ? "46px" : "40px",
                height: isSelected ? "46px" : "40px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#501E0D",
                    border: isSelected || isHovered ? "4px solid #b86d2a" : "2px solid #b86d2a",
                    borderRadius: "50% 50% 50% 0",
                    transform: "rotate(-45deg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                }}
            >
                <div
                    style={{
                        width: "16px",
                        height: "16px",
                        backgroundColor: isSelected || isHovered ? "#b86d2a" : "transparent",
                        border: isSelected || isHovered ? "4px solid #b86d2a" : "2px solid #b86d2a",
                        borderRadius: "50%",
                    }}
                />
            </div>
        </div>
    );
};


export default Marker;