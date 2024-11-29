import SaveIcon from "../components/svgIcon/SaveIcon";
import ShareIcon from "../components/svgIcon/ShareIcon";

function ActionButton() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex space-x-4">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
          <ShareIcon />
          Share
        </button>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
          <SaveIcon />
          Save
        </button>
      </div>
    </div>
  );
}

export default ActionButton;
