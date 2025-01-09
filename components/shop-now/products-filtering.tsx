'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]


const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

const perfumes = [
    {
        "id": 1,
        "name": "Chanel No. 5 Eau de Parfum",
        "brand": "Chanel",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Floral", "Citrus", "Vanilla"],
        "gender": "Unisex",
        "price": "$120",
        "rating": 4.8,
        "reviews": 1543,
        "discount": 10
    },
    {
        "id": 2,
        "name": "Dior Sauvage Eau de Toilette",
        "brand": "Dior",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Spicy", "Woody", "Amber"],
        "gender": "Male",
        "price": "$110",
        "rating": 4.7,
        "reviews": 1342,
        "discount": 15
    },
    {
        "id": 3,
        "name": "Gucci Bloom Eau de Parfum",
        "brand": "Gucci",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Jasmine", "Rangoon Creeper", "Tuberose"],
        "gender": "Female",
        "price": "$135",
        "rating": 4.9,
        "reviews": 1024,
        "discount": 20
    },
    {
        "id": 4,
        "name": "Versace Eros Eau de Toilette",
        "brand": "Versace",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Mint", "Green Apple", "Vanilla"],
        "gender": "Male",
        "price": "$95",
        "rating": 4.6,
        "reviews": 1189,
        "discount": 10
    },
    {
        "id": 5,
        "name": "Yves Saint Laurent Black Opium",
        "brand": "Yves Saint Laurent",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Coffee", "Vanilla", "Cedarwood"],
        "gender": "Female",
        "price": "$115",
        "rating": 4.8,
        "reviews": 987,
        "discount": 5
    },
    {
        "id": 6,
        "name": "Tom Ford Oud Wood Eau de Parfum",
        "brand": "Tom Ford",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Oud", "Sandalwood", "Cardamom"],
        "gender": "Unisex",
        "price": "$250",
        "rating": 4.9,
        "reviews": 743,
        "discount": 25
    },
    {
        "id": 7,
        "name": "Jo Malone London English Pear & Freesia",
        "brand": "Jo Malone",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Pear", "Freesia", "Amber"],
        "gender": "Unisex",
        "price": "$140",
        "rating": 4.7,
        "reviews": 612,
        "discount": 18
    },
    {
        "id": 8,
        "name": "Armani Code Eau de Parfum",
        "brand": "Armani",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Lavender", "Tonka Bean", "Cedarwood"],
        "gender": "Male",
        "price": "$100",
        "rating": 4.6,
        "reviews": 805,
        "discount": 12
    },
    {
        "id": 9,
        "name": "Dolce & Gabbana Light Blue",
        "brand": "Dolce & Gabbana",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Citrus", "Apple", "Cedar"],
        "gender": "Female",
        "price": "$90",
        "rating": 4.8,
        "reviews": 1103,
        "discount": 8
    },
    {
        "id": 10,
        "name": "Creed Aventus",
        "brand": "Creed",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Bergamot", "Blackcurrant", "Pineapple"],
        "gender": "Male",
        "price": "$435",
        "rating": 4.9,
        "reviews": 1673,
        "discount": 30
    },
    {
        "id": 11,
        "name": "Hermès Terre d’Hermès",
        "brand": "Hermès",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Orange", "Pepper", "Vetiver"],
        "gender": "Male",
        "price": "$125",
        "rating": 4.7,
        "reviews": 923,
        "discount": 15
    },
    {
        "id": 12,
        "name": "Paco Rabanne 1 Million Eau de Toilette",
        "brand": "Paco Rabanne",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Cinnamon", "Leather", "Amber"],
        "gender": "Male",
        "price": "$95",
        "rating": 4.6,
        "reviews": 754,
        "discount": 10
    },
    {
        "id": 13,
        "name": "Marc Jacobs Daisy Eau de Toilette",
        "brand": "Marc Jacobs",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Strawberry", "Violet", "Vanilla"],
        "gender": "Female",
        "price": "$105",
        "rating": 4.8,
        "reviews": 849,
        "discount": 20
    },
    {
        "id": 14,
        "name": "Lancome La Vie Est Belle",
        "brand": "Lancome",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Vanilla", "Jasmine", "Iris"],
        "gender": "Female",
        "price": "$125",
        "rating": 4.9,
        "reviews": 1123,
        "discount": 25
    },
    {
        "id": 15,
        "name": "Byredo Mojave Ghost Eau de Parfum",
        "brand": "Byredo",
        "imageLight": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "imageDark": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
        "notes": ["Ambrette", "Magnolia", "Ambergris"],
        "gender": "Unisex",
        "price": "$190",
        "rating": 4.7,
        "reviews": 504,
        "discount": 10
    }
];



function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductsFiltering() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                <h3 className="sr-only">Categories</h3>


                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            <div className="group grid size-4 grid-cols-1">
                                                                <input
                                                                    defaultValue={option.value}
                                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                >
                                                                    <path
                                                                        d="M3 8L6 11L11 3.5"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                                                    />
                                                                    <path
                                                                        d="M3 7H11"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                            className="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon aria-hidden="true" className="size-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="size-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>


                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                                                    <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            <div className="group grid size-4 grid-cols-1">
                                                                <input
                                                                    defaultValue={option.value}
                                                                    defaultChecked={option.checked}
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                >
                                                                    <path
                                                                        d="M3 8L6 11L11 3.5"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-[:checked]:opacity-100"
                                                                    />
                                                                    <path
                                                                        d="M3 7H11"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>


                            <div className="lg:col-span-3">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    {perfumes.map((perfume) => (
                                        <Link href="/product-detail" key={perfume.id}>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                                                <div className="h-56 w-full">
                                                    <a href="#">
                                                        <img
                                                            className="mx-auto h-full"
                                                            src={perfume.imageLight} // Use imageLight or imageDark here
                                                            alt={perfume.name}
                                                        />
                                                    </a>
                                                </div>

                                                <div className="pt-6">
                                                    <div className="mb-4 flex items-center justify-between gap-4">
                                                        {perfume.discount ? (
                                                            <span className="rounded bg-primary-100 text-gray-600 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                                                {perfume.discount}
                                                            </span>
                                                        ) : (
                                                            <span className="text-gray-600 text-xs">No Discount</span>
                                                        )}
                                                        <div className="flex items-center gap-1">
                                                            <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                                                                <span className="sr-only">Quick look</span>
                                                                <svg
                                                                    className="h-5 w-5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                                    />
                                                                    <path
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <button className="rounded-lg p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                                                                <span className="sr-only">Add to Favorites</span>
                                                                <svg
                                                                    className="h-5 w-5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        stroke="currentColor"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
                                                        {perfume.name}
                                                    </a>

                                                    <div className="mt-2 flex items-center gap-2">
                                                        <div className="flex items-center">
                                                            {Array.from({ length: 5 }).map((_, i) => (
                                                                <svg
                                                                    key={i}
                                                                    className={`h-4 w-4 ${i < Math.round(perfume.rating) ? "text-yellow-400" : "text-gray-300"}`}
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                                </svg>
                                                            ))}
                                                        </div>
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {perfume.rating}
                                                        </p>
                                                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                            ({perfume.reviews})
                                                        </p>
                                                    </div>

                                                    {/* Add to Cart Button */}
                                                    <div className="mt-4">
                                                        <button className="w-full rounded-md bg-[#f68cba] py-2 text-white hover:bg-[#e678a6]">
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
