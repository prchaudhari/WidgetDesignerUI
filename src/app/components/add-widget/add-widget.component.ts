import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Widget } from '../../models/widget.model';
import { WidgetsService } from '../../services/widget.service';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css']
})
export class AddWidgetComponent {
  ckeditorContent: any;
  newWidget: Widget = {
    id: '',
    widgetName: '',
    description: '',
    dataSourceJson: '',
    widgetCSS: '',
    widgetCSSUrl: '',
    widgetIcon: '',
    initialWidth: 0,
    initialHeight: 0,
  };

  constructor(
    private widgetService: WidgetsService,
    private router: Router
  ) { }

  addWidget() {
    this.widgetService.addWidget(this.newWidget).subscribe({
      next: (widget) => {
        this.router.navigate(['widget']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }


  ShowPreview() {
    alert("Widget Preview");
  }
}
