import { Component } from '@angular/core';
import { VetTimelineComponent } from "../../components/vet-timeline/vet-timeline.component";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [VetTimelineComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

}
