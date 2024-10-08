import { CopyIcon } from "@cartridge/ui";
import { HStack, Text } from "@chakra-ui/react";
import { formatAddress } from "utils/contracts";
import { useToast } from "hooks/toast";

export function CopyAddress({ address }: { address: string }) {
  const { toast } = useToast();

  return (
    <HStack
      _hover={{ cursor: "pointer" }}
      onClick={() => {
        navigator.clipboard.writeText(
          formatAddress(address, { fullLength: true }),
        );
        toast("Copied");
      }}
    >
      <Text color="text.secondaryAccent">
        {formatAddress(address, { first: 15, last: 15 })}
      </Text>
      <CopyIcon fontSize="md" />
    </HStack>
  );
}
