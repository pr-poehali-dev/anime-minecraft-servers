import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  const servers = [
    { name: "Soul Society", players: "147/200", type: "Survival", status: "online" },
    { name: "Hueco Mundo", players: "89/150", type: "PvP", status: "online" },
    { name: "Karakura Town", players: "203/250", type: "Creative", status: "online" },
  ];

  const events = [
    { title: "Битва Капитанов", date: "15 сентября", type: "PvP турнир" },
    { title: "Строительство Готея 13", date: "20 сентября", type: "Ивент" },
    { title: "Охота на Холлоу", date: "25 сентября", type: "PvE" },
  ];

  return (
    <div className="min-h-screen anime-gradient text-white">
      {/* Навигация */}
      <nav className="anime-card backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-bleach-orange">⚔️ BLEACH CRAFT</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Button variant="ghost" className="text-white hover:text-bleach-orange">Главная</Button>
              <Button variant="ghost" className="text-white hover:text-bleach-orange">Серверы</Button>
              <Button variant="ghost" className="text-white hover:text-bleach-orange">Моды</Button>
              <Button variant="ghost" className="text-white hover:text-bleach-orange">Правила</Button>
              <Button variant="ghost" className="text-white hover:text-bleach-orange">Донат</Button>
            </div>
            <Button className="bg-bleach-orange hover:bg-opacity-80 text-white bleach-glow">
              Играть
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="relative py-20 px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(/img/ac713abd-0649-4cad-9ac6-41245df2afae.jpg)` }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 spiritual-energy">
            BLEACH <span className="text-bleach-gold">CRAFT</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Погрузись в мир аниме Блич в Minecraft! Становись Шинигами, сражайся с Холлоу, 
            исследуй Общество Душ и открывай свои духовные способности.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="bg-bleach-orange hover:bg-opacity-80 text-white px-8 py-3 text-lg bleach-glow">
              <Icon name="Play" size={20} className="mr-2" />
              Начать игру
            </Button>
            <Button variant="outline" className="border-bleach-gold text-bleach-gold hover:bg-bleach-gold hover:text-bleach-darkblue px-8 py-3 text-lg">
              <Icon name="Book" size={20} className="mr-2" />
              Гайды
            </Button>
          </div>
          
          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="anime-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-bleach-orange mb-2">439</div>
                <div className="text-gray-300">Игроков онлайн</div>
              </CardContent>
            </Card>
            <Card className="anime-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-bleach-gold mb-2">3</div>
                <div className="text-gray-300">Активных серверов</div>
              </CardContent>
            </Card>
            <Card className="anime-card">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-bleach-orange mb-2">15k+</div>
                <div className="text-gray-300">Игроков всего</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Серверы */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Наши <span className="text-bleach-gold">Серверы</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servers.map((server, index) => (
              <Card key={index} className="anime-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-bleach-orange">{server.name}</CardTitle>
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      {server.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Игроки:</span>
                      <span className="text-bleach-gold">{server.players}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Тип:</span>
                      <span className="text-bleach-gold">{server.type}</span>
                    </div>
                    <Progress value={parseInt(server.players.split('/')[0]) / parseInt(server.players.split('/')[1]) * 100} className="w-full" />
                    <Button className="w-full bg-bleach-orange hover:bg-opacity-80">
                      Подключиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Особенности */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Особенности <span className="text-bleach-gold">Сервера</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="anime-card">
              <CardHeader>
                <Icon name="Sword" size={48} className="text-bleach-orange mb-4" />
                <CardTitle>Занпакто</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Получи уникальный Занпакто с особыми способностями. Развивай свой меч и открывай новые техники.
                </p>
              </CardContent>
            </Card>
            
            <Card className="anime-card">
              <CardHeader>
                <Icon name="Zap" size={48} className="text-bleach-gold mb-4" />
                <CardTitle>Духовная сила</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Развивай свою духовную силу, изучай Кидо и становись сильнее с каждым боем.
                </p>
              </CardContent>
            </Card>
            
            <Card className="anime-card">
              <CardHeader>
                <Icon name="Users" size={48} className="text-bleach-orange mb-4" />
                <CardTitle>Кланы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Создай свой отряд или присоединись к Готею 13. Сражайся вместе с друзьями.
                </p>
              </CardContent>
            </Card>
            
            <Card className="anime-card">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-bleach-gold mb-4" />
                <CardTitle>Уникальные локации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Исследуй Общество Душ, Уэко Мундо и мир живых. Каждая локация полна секретов.
                </p>
              </CardContent>
            </Card>
            
            <Card className="anime-card">
              <CardHeader>
                <Icon name="Trophy" size={48} className="text-bleach-orange mb-4" />
                <CardTitle>PvP турниры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Участвуй в эпических битвах и турнирах. Докажи, что ты достоин звания Капитана.
                </p>
              </CardContent>
            </Card>
            
            <Card className="anime-card">
              <CardHeader>
                <Icon name="Gift" size={48} className="text-bleach-gold mb-4" />
                <CardTitle>Ежедневные награды</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Получай ежедневные бонусы, участвуй в ивентах и получай уникальные предметы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* События */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Ближайшие <span className="text-bleach-gold">События</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="anime-card">
                <CardHeader>
                  <CardTitle className="text-bleach-orange">{event.title}</CardTitle>
                  <Badge variant="outline" className="border-bleach-gold text-bleach-gold w-fit">
                    {event.type}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Icon name="Calendar" size={16} />
                    <span>{event.date}</span>
                  </div>
                  <Button className="w-full mt-4 bg-bleach-orange hover:bg-opacity-80">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Донат */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Поддержи <span className="text-bleach-gold">Сервер</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="anime-card">
              <CardHeader>
                <CardTitle className="text-center text-white">Шинигами</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bleach-orange">₽299</div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>• Доступ к Занпакто</li>
                  <li>• +50% опыта</li>
                  <li>• Приватный дом</li>
                </ul>
                <Button className="w-full bg-bleach-orange hover:bg-opacity-80">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="anime-card border-bleach-gold">
              <CardHeader>
                <Badge className="bg-bleach-gold text-bleach-darkblue mx-auto mb-2">Популярно</Badge>
                <CardTitle className="text-center text-white">Капитан</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bleach-gold">₽599</div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>• Все из Шинигами</li>
                  <li>• Банкай способности</li>
                  <li>• Кастомные предметы</li>
                  <li>• VIP статус</li>
                </ul>
                <Button className="w-full bg-bleach-gold text-bleach-darkblue hover:bg-opacity-80">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="anime-card">
              <CardHeader>
                <CardTitle className="text-center text-white">Командир</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bleach-orange">₽999</div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>• Все из Капитана</li>
                  <li>• Создание кланов</li>
                  <li>• Уникальные питомцы</li>
                  <li>• Админ привилегии</li>
                </ul>
                <Button className="w-full bg-bleach-orange hover:bg-opacity-80">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 px-6 bg-black/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-bleach-orange">BLEACH CRAFT</h3>
              <p className="text-gray-300">
                Лучший Minecraft сервер в стиле аниме Блич. Присоединяйся к нашему сообществу!
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-bleach-gold">Игра</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-bleach-orange">Серверы</a></li>
                <li><a href="#" className="hover:text-bleach-orange">Моды</a></li>
                <li><a href="#" className="hover:text-bleach-orange">Правила</a></li>
                <li><a href="#" className="hover:text-bleach-orange">Гайды</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-bleach-gold">Сообщество</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-bleach-orange">Discord</a></li>
                <li><a href="#" className="hover:text-bleach-orange">ВКонтакте</a></li>
                <li><a href="#" className="hover:text-bleach-orange">YouTube</a></li>
                <li><a href="#" className="hover:text-bleach-orange">Форум</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-bleach-gold">IP сервера</h4>
              <div className="bg-bleach-darkblue p-3 rounded border border-bleach-orange">
                <code className="text-bleach-orange">bleach-craft.ru</code>
              </div>
              <p className="text-sm text-gray-400 mt-2">Версия: 1.20.1</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BLEACH CRAFT. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}