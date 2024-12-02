import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAccountBalance } from "@/API/account/account";
import { AppContext } from "@/hooks/context/useAppProvider/useAppProvider";
import { styles } from "./styles";

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
            className="w-7 h-7 mr-2"
            style={styles.imageStyles}
          />
          <View>
            <Text className="text-xl font-semibold -mb-2">{acc.name}</Text>
            <Text className="text-lg">{acc.balance.toFixed(2)} лв</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
