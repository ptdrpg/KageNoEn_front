import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { useSearchPeople } from "~/query/friends/friend-query";
import { useForm } from "react-hook-form";
import { useDebounce } from "~/utils/Debouce";
import type { FriendRequestType } from "~/types/friends.type";
import FriendRequestCard from "./FriendRequestCard";

type SearchInputType = {
  username: string;
};

const NewFriendsForm = () => {
  const { register, watch } = useForm<SearchInputType>({
    defaultValues: { username: "" },
  });

  const username = watch("username"); // Surveille les changements en temps réel
  const debouncedUsername = useDebounce(username, 300); // Délai de 300 ms

  const { data: allRelatedUsers = [] } = useSearchPeople(debouncedUsername, {
    enabled: !!debouncedUsername.trim(), // Active seulement si non vide
  });

  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-full flex items-center justify-center gap-[10px] py-[10px]">
        <Input
          placeholder="Search username"
          className="bg-white"
          {...register("username")}
        />
      </div>

      <Separator orientation="horizontal" />

      <div className="flex flex-col w-full gap-[10px]">
        <div className="p-[10px]">
          <p className="text-[12px] font-bold text-gray-500">People</p>
        </div>
        <div className="flex flex-col gap-[20px] pt-[10px] w-full">
          {debouncedUsername ? (
            allRelatedUsers.length > 0 ? (
              allRelatedUsers.map((p, i) => (
                <FriendRequestCard
                  key={i}
                  username={p.username}
                  id={p.id}
                  isAdding={true}
                />
              ))
            ) : (
              <p className="text-gray-400 text-center text-[12px]">
                No users found
              </p>
            )
          ) : (
            <p className="text-gray-400 text-center text-[12px]">
              It's Quiet for now
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewFriendsForm;