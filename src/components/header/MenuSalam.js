import React from 'react'
import { Menu, Sticky } from 'semantic-ui-react'
import "./MenuSalam.css"

export default function MenuSalam() {
    return (
      <Sticky>
        <Menu id = "handle_Menu" secondary stackable pointing >
        <Menu.Item as = "a" href = "/">
          <h4>Home</h4>
        </Menu.Item>
        <Menu.Item as = "a" href = "/groupchat">
        <h4>MeetingRoom</h4>
        </Menu.Item>
        <Menu.Item as = "a" href = "/signup">
        <h4>Sign Up</h4>
        </Menu.Item>
        <Menu.Item as = "a" href = "/login">
        <h4>Log In</h4>
        </Menu.Item>
      </Menu>
      </Sticky>
    )
}