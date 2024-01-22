import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { SearchComponent } from './search/search.component';
import { PostComponent } from './post/post.component';
import { ReelComponent } from './reel/reel.component';
import { ProfileComponent } from './profile/profile.component';
import { TagComponent } from './tag/tag.component';
import { TagsetComponent } from './tagset/tagset.component';
import { ProsetComponent } from './proset/proset.component';
import { AmeliaComponent } from './amelia/amelia.component';
import { RoseComponent } from './rose/rose.component';
import { AvaComponent } from './ava/ava.component';
import { LeaComponent } from './lea/lea.component';
import { EnzoComponent } from './enzo/enzo.component';
import { ClaraComponent } from './clara/clara.component';
import { MathiasComponent } from './mathias/mathias.component';
import { JadeComponent } from './jade/jade.component';
import { FelixComponent } from './felix/felix.component';
import { JadechatComponent } from './jadechat/jadechat.component';
import { PaulchatComponent } from './paulchat/paulchat.component';
import { AvachatComponent } from './avachat/avachat.component';
import { PatrickchatComponent } from './patrickchat/patrickchat.component';
import { ClarachatComponent } from './clarachat/clarachat.component';
import { FrankchatComponent } from './frankchat/frankchat.component';
import { RosechatComponent } from './rosechat/rosechat.component';
import { RichardComponent } from './richard/richard.component';
import { EthanchatComponent } from './ethanchat/ethanchat.component';
import { AmeliachatComponent } from './ameliachat/ameliachat.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'chat',component:ChatComponent},
  {path:'search',component:SearchComponent},
  {path:'post',component:PostComponent},
  {path:'reel',component:ReelComponent},
  {path:'profile',component:ProfileComponent},
  {path:'tag',component:TagComponent},
  {path:'proset',component:ProsetComponent},
  {path:'tagset',component:TagsetComponent},
  {path:'amelia',component:AmeliaComponent},
  {path:'rose',component:RoseComponent},
  {path:'ava',component:AvaComponent},
  {path:'lea',component:LeaComponent},
  {path:'enzo',component:EnzoComponent},
  {path:'clara',component:ClaraComponent},
  {path:'mathias',component:MathiasComponent},
  {path:'jade',component:JadeComponent},
  {path:'felix',component:FelixComponent},
  {path:'jadechat',component:JadechatComponent},
  {path:'paulchat',component:PaulchatComponent},
  {path:'avachat',component:AvachatComponent},
  {path:'patrickchat',component:PatrickchatComponent},
  {path:'clarachat',component:ClarachatComponent},
  {path:'frankchat',component:FrankchatComponent},
  {path:'rosechat',component:RosechatComponent},
  {path:'richard',component:RichardComponent},
  {path:'ethanchat',component:EthanchatComponent},
  {path:'ameliachat',component:AmeliachatComponent},
  {path : '', redirectTo: '/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
