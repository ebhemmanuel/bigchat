# BigChat
![](https://cdn.discordapp.com/attachments/887882226308640838/1210403732064567378/bigchat.png?ex=65ea6f51&is=65d7fa51&hm=1204fd41788e2642e137257539f1f94430892155cb4e5de6753c2960d68368be&)
BigChat is an innovative tool designed to elevate the interaction experience for streamers and their audiences. By introducing personalized chat bubbles and high-definition, scalable emojis, our project aims to make every chat more engaging and visually appealing.

Disclaimer - the image above is an early concept - styling and interaction are still early on and need a more dynamic execution.

## Features

![](https://cdn.discordapp.com/attachments/887882226308640838/1210405351778947152/chat.gif?ex=65ea70d4&is=65d7fbd4&hm=b09cb47a1dc0a1017b5fe35c3d5aa5ef6ff840e08823468dae36734bad845053&)

- **Custom Chat Bubbles:** Customize the appearance of chat bubbles for individual users, making the chat stream more colorful and personalized.

- **High-Quality Emojis:** Enjoy a vast library of high-definition emojis that stand out for their clarity and detail.

- **Dynamic Emoji Sizing:** The more emojis a user sends in a single message, the larger they appear, adding a fun and interactive element to chat engagements.

- **User-Friendly Interface:** Designed with both streamers and viewers in mind, our interface is intuitive and easy to navigate, ensuring a seamless integration into your streaming setup.

## Getting Started
To get started with BigChat, follow these simple steps:

1. **Installation:**
   - Clone the repository to your local machine using `git clone https://github.com/ebhemmanuel/bigchat`
   - Download github desktop if you're not very familiar with cloining repo's. Once installed you can download and manage your repos from there.
   - Navigate to the project directory and install the required dependencies using npm i.
   - You'll need to transfer the `custom-chat-box.html` code on to your streamlabs html section.
   - There are some already existing users that have been added manually to the javascript while we build the backend for a twitch auth system. You'll need to mimic the code struc
   - Next we want to pass the custom-fields in so that we can adjust font sizes and other settings this way through streamlabs.

3. **Configuration:**
   - While we still have to setup a front-end config system, you'll need to have some experience with css to adjust most of the settings.
   - You'll find the file to change in the `assets/scss/components` directory. everything else gets compiled up to the `main.scss` and then outputed to the final `main.css` file in `assets/css`
   - In the `assets/scss/mixin/_profiles.scss` file - youll find our main mixin @mixin profile-avatar ($av-bg, $av-pos, $top, $left)

4. **Launching:**
   - In terminal run sass-watch to generate your file and start making changes!
   - Open up `assets/css/main.css` and copy paste it over to your custom css section in streamlabs.
   - Happy chatting!


## Contributing
We welcome contributions from the community! If you have suggestions for improvements or new features, please follow our contribution guidelines:

- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -am 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## Acknowledgments
- Shoutout to the streaming community for inspiring us to create this tool.

## Contact
For support or inquiries, please contact us via GitHub or join our Discord community.

---

We hope BigChat makes your streaming experience more interactive, personalized, and fun. Happy streaming!
