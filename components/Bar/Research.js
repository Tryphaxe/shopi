import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Search from './Search'
import SearchCar from './SearchCar'
import SearchAct from './SearchAct'

export default function Research() {
  return (
    <TabGroup className="bg-white px-3 py-4 rounded-lg">
      <TabList className="mb-3">
        <Tab className="data-[selected]:border-b-orange-500 data-[selected]:border-b-2 data-[selected]:text-black outline-none mr-5">Hôtels</Tab>
        <Tab className="data-[selected]:border-b-orange-500 data-[selected]:border-b-2 data-[selected]:text-black outline-none mr-5">Voitures</Tab>
        <Tab className="data-[selected]:border-b-orange-500 data-[selected]:border-b-2 data-[selected]:text-black outline-none mr-5">Activités</Tab>
      </TabList>
      <TabPanels>

        {/* RECHERCHES POUR HOTELS */}
        <TabPanel>
            <Search />
        </TabPanel>

        {/* RECHERCHE VOITURE */}
        <TabPanel>
            <SearchCar />
        </TabPanel>

        {/* RECHERCHE ACTIVITY */}
        <TabPanel>
            <SearchAct />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}