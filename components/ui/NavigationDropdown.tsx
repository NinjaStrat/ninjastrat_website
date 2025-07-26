'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface DropdownItem {
  name: string
  href: string
  description?: string
}

interface NavigationDropdownProps {
  label: string
  items: DropdownItem[]
}

export function NavigationDropdown({ label, items }: NavigationDropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
          {label}
          <ChevronDownIcon className="ml-1 h-4 w-4" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-lg bg-surface-elevated shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none border border-surface-higher">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item key={item.href}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`${
                      active ? 'bg-surface-higher text-primary' : 'text-text-primary'
                    } block px-4 py-2 text-sm transition-colors duration-150`}
                  >
                    <div className="font-medium">{item.name}</div>
                    {item.description && (
                      <div className="text-xs text-text-secondary mt-0.5">{item.description}</div>
                    )}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}