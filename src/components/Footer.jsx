const footerOption = [
  {
    title: 'About',
    options: [
      {
        title: 'About us',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Our Team',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Blog',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Practice Areas',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      }
    ]
  },
  {
    title: 'Support',
    options: [
      {
        title: 'Book a Consultation',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Whatsapp',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Telegram',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Live Chat',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
    ]
  },
  {
    title: 'Resources',
    options: [
      {
        title: 'FAQ',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Privacy Policy',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Terms of Service',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Case Results',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      }
    ]
  }
]

function Footer() {
  return (
    <footer className="bg-amber-950 text-white pt-8 px-3">
      <div className="my-6 text-center text-3xl">&#8212;&#8212; <span className=" font-bold">Uche Ebrim & co</span> &#8212;&#8212;</div>

      <div className="my-3">Habitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.</div>

      <div className="flex justify-between mb-6">
        {footerOption.map((foot, index)=>(
        <div key={index} className="px-2 my-2">
          <div className="text-xl font-semibold my-2">{foot.title}</div>

          {foot.options.map((option, i)=>(
            <div key={i} className="font-light my-1">{option.title}</div>
            ))}
        </div>
        ))}
      </div>

      <div className="mt-4 pb-2 px-2 text-lg">
        <p>Uche Ebrim & Co</p>
        <p>23 Law Street, Nnewi, Anambra, Nigeria</p>
        <p>+234 801 000 0000</p>
        <p>info@ucheebrimco.com</p>

        <p className="mt-4 text-sm text-center">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
