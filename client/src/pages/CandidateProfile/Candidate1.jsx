import React from 'react'
import Frame from '../../img/candidates/img.png'
import {ReactComponent as Star1} from '../../img/star1.svg'
import {ReactComponent as Star2} from '../../img/star2.svg'

const Candidate1 = () => {
  return (
    <div className='h-fit w-max-scren bg-[#21201D] font-prata candidates'>


    
    {/* Candidates Header */}
        <div className='h-fit flex flex-col lg:flex-row justify-center timeline-bg p-10 pb-28'>

            <div className='relative h-[100%] mr-2 justify-center flex lg:pl-28'>
                <img src={Frame}></img>
                <h1 className='absolute z-10 text-[150px] lg:text-[300px] right-[0px] lg:right-[-30px] top-[54%] lg:top-[32%] text-white shadowm-xl '>1</h1>
            </div>

            <div className='lg:w-[50%] mx-auto ml-2 relative flex justify-center lg:justify-start align-middle'>
                <div className='m-auto pt-[10%] lg:pt-[22%] w-[100%]'>
                    <h1 className='text-[50px] text-center lg:text-left lg:text-[100px] lg:w-[40%] leading-[0.9] text-white'>NAUFAL ABIYYU</h1>
                    <h2 className ='text-[30px] text-center lg:pl-1 lg:text-left lg:text-[55px] text-[#D4A976] leading-none lg:leading-[0.9] py-1'>Divisi Banyak Proker</h2>
                    <h3 className ='text-[28px] text-center lg:pl-2 lg:text-left lg:text-[55px] text-[#D4A976] leading-none'>2021</h3>
                </div>
            </div>
        </div>

    {/* cv */}
        <div className='h-fit w-screen flex flex-col justify-center pb-20'>

            <div className='flex justify-evenly px-80 pt-16 pb-5 '>
                <div className='grid items-center'><Star1/></div>
                    <h1 className='text-2xl lg:text-5xl prim-color grid items-center text-center'>Curriculum Vitae</h1>
                <div className='grid items-center'><Star2/></div>
            </div>

            <div className='h-fit m-auto flex justify-center'>
                <iframe className='w-[90vw] h-[75vh]' src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" frameborder="0"></iframe>
            </div>


        </div>

    {/* Grand Design */}
        <div className='h-fit w-screen flex flex-col justify-center pb-20'>

            <div className='flex justify-evenly px-[22rem] pt-16 pb-5 '>
                <div className='grid items-center'><Star1/></div>
                    <h1 className='text-2xl lg:text-5xl prim-color grid items-center text-center'>Grand Design</h1>
                <div className='grid items-center'><Star2/></div>
            </div>

            <div className='h-fit m-auto flex justify-center'>
                <iframe className='w-[90vw] h-[75vh]' src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" frameborder="0"></iframe>
            </div>


        </div>

    {/* Visi dan Misi */}
        <div className='h-fit candidates-bg w-screen flex text-white justify-center candidates-bg py-28'>

            <div className='w-[90%] h-fit flex lg:flex-row flex-col'>

                <div className='lg:w-[50%] flex flex-col py-[40px] px-[40px] lg:p-[80px] bg-[#21201D]  '>

                    <div className='flex justify-center lg:pb-5 text-[#D4A976]'>
                        <h1 className='text-[60px]'>Visi</h1>
                    </div>

                    <div className='text-justify '>
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br/> <br/> Dengan terpilihnya saya menjadi MAKOMJI, saya akan melakukan rebranding pada website dan logo himakom. Setelah itu saya serahkan semua ke diki karena saya hanyalah boneka
                        </h1>
                    </div>
                </div>

                <div className='lg:w-[50%] flex flex-col py-[45px] px-[40px] lg:p-[80px] bg-[#21201db2] '>

                    <div className='flex justify-center lg:pb-5 text-[#D4A976]'>
                        <h1 className='text-[60px]'>Misi</h1>
                    </div>


                    <div className='text-left '>
                        <ul className='space-y-3.5 w-[90%]'>
                            <li className='flex justify-start w-[100%]'>
                                <h1 className='circle-no mr-4 grid place-items-center text-[#21201D] text-lg'>1</h1>
                                <h1 className='grid place-items-center text-[white] text-lg'>Klo saya jd makomji, traktir makan auce pake dandept</h1>
                            </li>

                            <li className='flex justify-start w-[100%]'>
                                <h1 className='circle-no mr-4 grid place-items-center text-[#21201D] text-lg'>1</h1>
                                <h1 className='grid place-items-center text-[white] text-lg'>Klo saya jd makomji, traktir makan auce pake dandept</h1>
                            </li>

                            <li className='flex justify-start w-[100%]'>
                                <h1 className='circle-no mr-4 grid place-items-center text-[#21201D] text-lg'>1</h1>
                                <h1 className='grid place-items-center text-[white] text-lg'>Klo saya jd makomji, traktir makan auce pake dandept</h1>
                            </li>

                            <li className='flex justify-start w-[100%]'>
                                <h1 className='circle-no mr-4 grid place-items-center text-[#21201D] text-lg'>1</h1>
                                <h1 className='grid place-items-center text-[white] text-lg'>Klo saya jd makomji, traktir makan auce pake dandept</h1>
                            </li>

                            <li className='flex justify-start w-[100%]'>
                                <h1 className='circle-no mr-4 grid place-items-center text-[#21201D] text-lg'>1</h1>
                                <h1 className='grid place-items-center text-[white] text-lg'>klo saya jd makomji, traktir makan auce pake dandept.
                                HEHEHHEEHE ya gitu. lebih seru pake gini drpd lorem ipsum dolor shit kan</h1>
                            </li>

                        </ul>


                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Candidate1
