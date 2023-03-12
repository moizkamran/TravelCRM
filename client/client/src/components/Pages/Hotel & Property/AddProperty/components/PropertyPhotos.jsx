import { Group, Input, TextInput, Title, Tooltip, Text, Radio, Flex, Button, Container, ActionIcon, NativeSelect, Checkbox, MultiSelect, FileInput} from '@mantine/core'
import { IconAlertCircle, IconArrowBadgeLeft, IconArrowBadgeRight, IconQuestionCircle, IconSearch, IconMoon, IconArrowLeft, IconArrowRight, IconBread, IconParking, IconPlus, IconLanguageHiragana, IconApps, IconWifi, IconGlass, IconBrightnessHalf, IconLeaf, IconFence, IconSmokingNo, IconBath, IconAirConditioning, IconHorseToy, IconPool, IconMessage, IconBed, IconPhotoUp, IconUpload } from '@tabler/icons'
import React, { useState } from 'react'

export const PropertyPhotos = ({ onButtonClick, onBackClick }) => {

    const [data, setData] = useState([
        { value: 'telephone', label: 'Telephone with local and long-distance calling' },
        { value: 'iron', label: 'Iron and ironing board' },
        { value: 'hair-dryer', label: 'Hair dryer' },
        { value: 'towels-linens', label: 'Towels and linens' },
        { value: 'toiletries', label: 'Toiletries (soap, shampoo, conditioner)' },
        { value: 'kitchen', label: 'Kitchen with stove, oven, microwave, refrigerator, and dishwasher' },
        { value: 'coffee-maker', label: 'Coffee maker or tea kettle' },
        { value: 'cookware', label: 'Cookware, dishware, and utensils' },
        { value: 'dining-table', label: 'Dining table and chairs' },
        { value: 'living-room-furniture', label: 'Living room furniture (sofa, chairs, coffee table)' },
        { value: 'work-desk', label: 'Work desk and chair' },
        { value: 'in-room-safe', label: 'In-room safe' },
        { value: 'housekeeping', label: 'Daily housekeeping service' },
        { value: 'front-desk', label: '24-hour front desk service' },
        { value: 'fitness-center', label: 'Fitness center or gym' },
        { value: 'spa', label: 'Spa or massage services' },
        { value: 'business-center', label: 'Business center with computers and printers' },
        { value: 'laundry', label: 'Laundry facilities or dry cleaning service' },
        { value: 'parking', label: 'On-site parking' },
        { value: 'shuttle', label: 'Shuttle or transportation service' },
        { value: 'pet-friendly', label: 'Pet-friendly accommodations' },
        { value: 'accessible-rooms', label: 'Accessible rooms and facilities for guests with disabilities' }
      ]);
  
  return (
    <>
    <div style={{ display: "flex", flexDirection:'row', padding: 20, justifyContent: 'space-between'}}> 
    
    <div style={{ margin: "0", padding: "0", display: 'flex', gap: 20, justifyContent: 'space-between'}}> 
 

        <div> 

        <div style={{ display : 'flex', flexDirection: 'column', gap: 5}}>
            {/* Parking Module START */}
            <div style={{gap: 8, display: 'flex', flexDirection: 'column'}}>

            <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconBed size={'50'}/>
                    <Title mt={5}>Extra Bed Option</Title>
                </div>
                <div>
            <Text>Can you provide extra beds?</Text>
            <div style={{display: 'flex', gap: 10, marginTop: 5}}>

            <NativeSelect
                data={["Yes", "No"]}
                radius="md"
                size="md"
                style={{width: 150}}
                />
            <NativeSelect
                data={["1 Bed", "2 Beds", "3 Beds", "4 Beds" ]}
                radius="md"
                size="md"
                style={{width: 150}}
                />
                </div>
            </div>
            <div>
            <Text>Check the box(es) if you can accommodate <br/> the following guests in extra beds.</Text>
                    <div style={{gap: 15, display: 'flex', flexDirection: 'column', marginTop: 20}}>
                      <Checkbox label="Children up to 2 years old in cribs" size="md" color="dark" />
                      <Checkbox label="Children" size="md" color="dark" />
                      <Checkbox label="Adults" size="md" color="dark" />
                    </div>
            </div>
                </div> {/* Parking Module END */}
                {/* ----------------------------------------------------------------------------- */}

        </div>
        
      </div>

      <div>

        <div style={{ display : 'flex', flexDirection: 'column' }}>
      <div>
            <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconApps size={'50'}/>
                    <Title mt={5}>Extras</Title>
              </div>
                  <div style={{display: 'flex', gap: 50}}>
                <div style={{gap: 15, display: 'flex', flexDirection: 'column', marginTop: 20}}>
                      <Checkbox label="Free Wifi" icon={IconWifi} size="md" color="dark" />
                      <Checkbox label="Bar" icon={IconGlass} size="md" color="dark" />
                      <Checkbox label="Sauna" icon={IconBrightnessHalf} size="md" color="dark" />
                      <Checkbox label="Garden" icon={IconLeaf} size="md" color="dark" />
                      <Checkbox label="Terrance" icon={IconFence} size="md" color="dark" />
                    </div>
                    <div style={{gap: 15, display: 'flex', flexDirection: 'column', marginTop: 20}}>
                      <Checkbox label="No Smoking Rooms" icon={IconSmokingNo} size="md" color="dark" />
                      <Checkbox label="Family Rooms" icon={IconHorseToy} size="md" color="dark" />
                      <Checkbox label="Hot tub/Jacuzzi" icon={IconBath} size="md" color="dark" />
                      <Checkbox label="Air Conditioning" icon={IconAirConditioning} size="md" color="dark" />
                      <Checkbox label="Swimming Pool" icon={IconPool} size="md" color="dark" />
                    </div>
                </div>

                        <MultiSelect
                        styles={{ dropdown: { borderRadius: 25 }, value: { backgroundColor: '#07399E', color: 'white', fontWeight: 400 }, 
                                    defaultValueRemove: { color: 'white' }, item: { borderRadius: 25 }}}
                            style={{marginTop: 20, width: 400, height:300}}
                            data={data}
                            label="Add Extra Amenities"
                            placeholder="Piano, Coffe Maker, Hair Dryer, etc."
                            searchable
                            size="md"
                            creatable
                            getCreateLabel={(query) => `+ Create ${query}`}
                            onCreate={(query) => {
                              const item = { value: query, label: query };
                              setData((current) => [...current, item]);
                              return item;
                            }}
                            dropdownPosition="bottom"
                            nothingFound="Nothing found"
                            radius="lg"
                            />

      </div>

      </div>
      </div>

      <div>

        <div style={{ display : 'flex', flexDirection: 'column' }}>
      <div>
            <div style={{flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: 'center', gap: 5 }}>
                    <IconPhotoUp size={'50'}/>
                    <Title mt={5}>Upload Photos</Title>
              </div>
              <Text>Great photos invite guests to get the full experience of your <br/> property, so upload some high-resolution photos that <br/> represent all your property has to offer. </Text>
              <div style={{backgroundColor: '#FFFFFF', height: 150, width: 400, borderRadius: 20, marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20, border: '2px dashed #07399E'}}>
                
                <div>
                    <div style={{borderRadius: '50%', width: '100px', height: '100px', backgroundColor: '#F0F0F0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <FileInput variant={'unstyled'} icon={<IconUpload size={50} color={'black'}/>} style={{marginLeft: 3}} accept="image/png,image/jpeg" multiple />
                    
                    </div>
                </div>
                <div style={{display: 'flex', textAlign: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: 'inherit', marginLeft: 10}}>
                    <Text style={{fontSize: '24px'}}>Drag & Drop</Text>
                    <Text fz="sm">.png or .jpeg (max 2 MB / Photo)</Text>
                    </div>
                </div>
                </div>

      </div>

      </div>
      </div>
    
                            
      
      
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'fixed', bottom: 0, right: 0, marginRight: 20, marginBottom: 20}}>
            
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#07399E',
            width: '240px',
            marginBottom: 10,
            borderRadius: 25,
            padding: 15,
            color: 'white',
          }}>
            <Text>Step 4 out of 5</Text>
            <Button style={{backgroundColor: 'black', bottom: 0, position: 'relative', height: '50px', width: '100%', marginTop: 10}} leftIcon={<IconMessage/>}>Need Help?</Button>
          </div>
          <div style={{flexDirection: 'row', display: 'flex'}}> 
      <ActionIcon onClick={onBackClick} radius="xl" variant="filled" style={{backgroundColor: 'black', height: '50px', width: '50px', marginRight: 10}}>
      <IconArrowLeft size="1.5rem" />
    </ActionIcon>
        <Button onClick={onButtonClick} rightIcon={<IconArrowRight/>} style={{backgroundColor: '#07399E', height: '50px', width: '200px'}}>Next Step</Button>
          </div>
      </div>
      
    </div> 
    </div>
      </>
  )
}

export default PropertyPhotos