import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";



const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const onSelectPlatform=useGameQueryStore(s=>s.setPlatformID)

  const selectedPlatformID=useGameQueryStore(s=>s.gameQuery.platformID)
  const platform = usePlatform(selectedPlatformID);

  if (error) return null;

  return ( 
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
