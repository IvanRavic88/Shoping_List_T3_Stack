import { FC, Dispatch, SetStateAction, useState } from "react";
import { trpc } from "../utils/trpc";

interface ItemModalProp {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ItemModal: FC<ItemModalProp> = ({ setModalOpen }) => {
  const [input, setInput] = useState<string>("");
  const { mutate: addItem } = trpc.items.addItem.useMutation();

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="space-y-5 bg-white p-3">
        <h3 className="text-xl font-semibold">Name of item</h3>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-orange-300 focus:ring"
        />
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className="rounded-md bg-gray-500 p-1 text-sm text-white transition hover:bg-gray-600"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded-md bg-orange-500 p-1 text-sm text-white transition hover:bg-orange-600"
            onClick={() => {
              addItem({ name: input });
              setModalOpen(false);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
