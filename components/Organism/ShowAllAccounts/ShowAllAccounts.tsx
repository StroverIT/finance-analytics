import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAccountBalance } from "@/API/account/account";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";

export const ShowAllAccounts = () => {
  const { user } = useContext(AppContext);

  const account = useQuery({
    queryKey: ["account"],
    queryFn: getAccountBalance.bind(null, user?.uid as string),
  });

  return (
    <View className="flex-row gap-4 flex-wrap justify-around">
      {account.data?.map((acc) => (
        // @ts-ignore
        <View className="bg-white flex-row items-center" key={acc._id}>
          <Image
            source={{ uri: acc.icon }}
            className="w-10 h-10 mr-2"
            style={{
              objectFit: "contain",
            }}
          />
          <View>
            <Text className="text-lg font-semibold -mb-2">{acc.name}</Text>
            <Text className="text-lg">{acc.balance} лв</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
