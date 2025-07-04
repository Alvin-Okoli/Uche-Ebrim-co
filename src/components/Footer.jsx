const footerOption = [
  {
    title: 'About',
    options: [
      {
        title: 'About us',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Blog',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Careers',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Jobs',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'In Press',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      }
    ]
  },
  {
    title: 'Support',
    options: [
      {
        title: 'Contact us',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Online Chat',
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
        title: 'Ticketing',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
    ]
  },
  {
    title: 'FAQ',
    options: [
      {
        title: 'Account',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Management',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Orders',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Payments',
        info: 'loreHabitant sed a, vestibulum feugiat mauris. Odio mi sed amet, egestas suspendisse nunc, sit risus. Viverra commodo duis eu, ac. Tempus, senectus magnis orci enim posuere. Id consectetur id consectetur scelerisque interdum maecenas nunc nunc, tellus.'
      },
      {
        title: 'Returns',
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

      <div className="text-center mt-4 pb-2">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
